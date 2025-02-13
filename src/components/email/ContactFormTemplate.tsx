interface ContactFormTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormTemplate = ({
  name,
  email,
  subject,
  message
}: ContactFormTemplateProps) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message de contact - Delta Med Plus</title>
      </head>
      <body style="
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f5f5f5;
      ">
        <table width="100%" cellpadding="0" cellspacing="0" style="
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        ">
          <tr>
            <td align="center" style="padding: 20px 0;">
              <img 
                src="https://deltamedplus.tn/images/logo/logo.svg" 
                alt="Delta Med Plus" 
                style="
                  width: 120px;
                  height: auto;
                  margin-bottom: 20px;
                "
              >
              <h1 style="
                color: #187baa;
                margin: 0;
                font-size: 24px;
                font-weight: bold;
              ">
                Delta Med Plus
              </h1>
              <p style="
                color: #666;
                margin: 5px 0 0;
                font-size: 16px;
              ">
                Solutions Orthopédiques
              </p>
            </td>
          </tr>
          <tr>
            <td style="
              background-color: white;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            ">
              <h2 style="
                color: #187baa;
                margin: 0 0 20px;
                font-size: 20px;
              ">
                Nouveau message de contact
              </h2>
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 10px 0;">
                    <strong style="color: #187baa;">Nom:</strong>
                    <p style="margin: 5px 0;">${name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <strong style="color: #187baa;">Email:</strong>
                    <p style="margin: 5px 0;">${email}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <strong style="color: #187baa;">Sujet:</strong>
                    <p style="margin: 5px 0;">${subject}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0;">
                    <strong style="color: #187baa;">Message:</strong>
                    <p style="margin: 5px 0; white-space: pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px 0;">
              <p style="
                color: #666;
                font-size: 14px;
                margin: 0;
              ">
                © ${new Date().getFullYear()} Delta Med Plus. Tous droits réservés.
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}; 