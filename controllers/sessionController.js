import SessionManager from "../managers/SessionManager.js";
import { generateToken } from "../utils.js";

export const login = async (req, res) => {

    const { email, password } = req.body;

    const manager = new SessionManager();

    const user = await manager.login(email, password);

    if (user === 'Password invalid') {
        res.status(400).json({ message: 'Invalid password' })
        return;
    }

    const accessToken = await generateToken(user);

    req.session.accessToken = accessToken;
    req.session.user = user;

    res.cookie('accessToken', accessToken, {
        maxAge: 10000,
        httpOnly: true
    })

    res.status(200).json({ message: 'Login success!', accessToken: accessToken });

}

export const current = async (req, res) => {
    res.send({ status: "success", payload: req.user })
}

export const logout = async (req, res) => {

    req.session.destroy(err => {
        if (err) {
            return res.json({ message: 'Logout failed' });
        }

        res.send({ message: 'Logout successfull' });
    });
};
