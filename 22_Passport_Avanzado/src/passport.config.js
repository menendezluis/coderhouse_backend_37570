import passport from "passport";
import jwt, { ExtractJwt } from "passport-jwt";

const JWTStragegy = jwt.Strategy;

const initializePassport = () => {
  passport.use(
    "jwt",
    new JWTStragegy(
      {
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: "coderSecret",
      },
      async (jwt_payload, done) => {
        try {
          return done(null, jwt_payload);
        } catch (error) {
          done(error);
        }
      }
    )
  );
};

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["coderCookieToken"];
  }
  return token;
};

export default initializePassport;
