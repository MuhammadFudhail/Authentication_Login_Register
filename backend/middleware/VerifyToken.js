import jwt, { decode } from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decode) => {
        if(err) return res.sendStatus(403);
        req.email = decode.email;
        next();
    })

}