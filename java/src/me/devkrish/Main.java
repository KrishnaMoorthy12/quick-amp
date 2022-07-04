package me.devkrish;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Properties;

public class Main {

    public static void main(String[] args){
        String TO = "akrishnamoorthy007@gmail.com";
        String FROM = "collegematewebapp@gmail.com";
        String subject = "Test mail from Java SMTP";
        String content;
        Message mail;
        try {
            content = loadHtml();
            mail = prepareMessage(getMailerSession(), FROM, TO, subject, content);
            System.out.println("Sending email...");
            Transport.send(mail);
            System.out.println("Mail sent successfully.");
        } catch (MessagingException | IOException e) {
            e.printStackTrace();
        }

    }

    private static Message prepareMessage(Session session, String from, String recipient, String subject, String message) throws MessagingException {
        System.out.println("Preparing to send email...");

        MimeMessage mail = new MimeMessage(session);

        mail.setFrom(new InternetAddress(from));
        mail.addRecipient(Message.RecipientType.TO, new InternetAddress(recipient));
        mail.setSubject(subject);

        System.out.println(message);
        mail.setContent("Preview not available", "text/html");
        mail.setContent(message, "text/x-amp-html");
        return mail;
    }

    private static Properties getMailSetupProperties() {
        System.out.println("Configuring SMTP...");
        String HOST = "smtp.gmail.com";
        short PORT = 465;

        Properties properties = System.getProperties();

        properties.setProperty("mail.smtp.host", HOST);
        properties.setProperty("mail.smtp.port", String.valueOf(PORT));

        properties.put("mail.smtp.ssl.enable", "true");
        properties.setProperty("mail.smtp.auth", "true");
        return properties;
    }

    private static Session getMailerSession() {
        System.out.println("Authenticating with SMTP server...");
        Session session = Session.getDefaultInstance(getMailSetupProperties(), new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                String PASSWORD = "clgmateofficial";
                String USERNAME = "collegematewebapp@gmail.com";
                return new PasswordAuthentication(USERNAME, PASSWORD);
            }
        });
        return session;
    }

    private static String loadHtml() throws IOException {
        System.out.println("Loading HTML file...");
        return new String(Files.readAllBytes(Paths.get("src/me/devkrish/mail.html")));
    }
}
