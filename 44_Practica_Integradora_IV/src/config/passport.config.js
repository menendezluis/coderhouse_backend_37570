import passport from "passport";
import local from "passport-local";
import userServices from "../models/registro.model.js";
import { isValidPassword, createHash } from "../utils.js";
import GithubStrategy from "passport-github2";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  passport.use(
    "register",
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email",
      },
      async (req, username, password, done) => {
        const { firstName, lastName, email, age } = req.body;
        try {
          const user = await userServices.findOne({ email: username });
          if (user)
            return done(null, false, { message: "El usuario ya existe" });
          const newUser = {
            firstName,
            lastName,
            email,
            age,
            password: createHash(password),
          };
          const response = await userServices.create(newUser);
          return done(null, response);
        } catch (err) {
          return done("error al obtener usuario" + err);
        }
      }
    )
  );
  passport.use(
    "login",
    new LocalStrategy(
      { usernameField: "email" },
      async (username, password, done) => {
        try {
          const user = await userServices.findOne({ email: username });
          if (!user)
            return done(null, false, { message: "Usuario no encontrado" });
          if (!isValidPassword(user, password))
            return done(null, false, { message: "Contraseña incorrecta" });
          return done(null, user);
        } catch (err) {
          return done("error al obtener usuario" + err);
        }
      }
    )
  );

  //registro con github

  const GITHUB_CLIENT_SECRET = "";

  passport.use(
    "github",
    new GithubStrategy(
      {
        clientID: "Iv1.77e2d0dfa5081049",
        clientSecret: "288fc6e1ea85d9480e387d2a67ef4c9ed1b4708e",
        callbackURL: "http://localhost:8080/api/sessions/githubcallback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log(profile);
          const user = await userServices.findOne({
            email: profile._json.email,
          });
          if (!user) {
            const newUser = {
              firstName: profile._json.name ? profile._json.name : "",
              lastName: "",
              age: 0,
              email: profile._json.email,
              password: "",
            };
            const response = await userServices.create(newUser);
            return done(null, response);
          } else {
            return done(null, user);
          }
        } catch (err) {
          return done("error al obtener usuario" + err);
        }
      }
    )
  );
};

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userServices.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default initializePassport;
