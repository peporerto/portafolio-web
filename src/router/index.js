const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const router = express.Router();


//va recibir el cuerpo del los datos 
router.post('/send-email',(req,res) => {
    //creuna constate y en ella requiero los datos del objeto 
    const {name,email,message} = req.body;
    //crear lo el formato como se va a enviar el mesaje 

    contentHTML = `
    <h1>User Information</h1>
    <ul>
        <li>Username: ${name}</li>
        <li>User Email: ${email}</li>
        <li>PhoneNumber: ${message}</li>
    </ul>
`;
const CLIENTE_ID = "70895951616-22jlvnrsti9cqi6rduen4kvpa60vosra.apps.googleusercontent.com"
const CLIENTE_SECRET ="qj9dyTVM0sVPCUBQfegy8Q4W"
const REDIRECT_URI ="https://developers.google.com/oauthplayground"
const REFRESH_TOKEN = "ya29.a0ARrdaM_p3mVgr4IhwckB67ubjSDYFn85vYCk7vbcs7UYBbrzeEElMoyTqdZNIbMdBxBj7ap_X_9CprUptxSb-XEBZX0I7LxIkSCeWtgnf_EI6VoFXwnRlIlj8dXOA96kzjasUY1nQHFzqGb41V4ycZ0MXGBO"
const oauthClient = new google.auth.OAuth2(
    CLIENTE_ID,
    CLIENTE_SECRET,
    REDIRECT_URI

);

oauthClient.setCredentials({refresh_token:REFRESH_TOKEN });

async function sendMail(){
    try {
        const accessToken = await oauthClient.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "jmmantenimientoyremodelacion@gmail.com",
                clientId: CLIENTE_ID,
                clientSecret:  CLIENTE_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            },
        });
        const mailOptions = {
            from: "pagina web <jmmantenimientoyremodelacion@gmail.com>",
            to:  "jmmantenimientoyremodelacion@gmail.com",
            subject : "nodemail prueba",
            html: contentHTML,
        };
        const result = await transporter.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.log(error);
    } 
}
sendMail()
.then((result) => res.status(200).send("enviado"))
.catch(error => console.log(error.message));
});

module.exports = router;
//npm run dev