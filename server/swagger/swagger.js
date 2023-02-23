const swaggerAutogen = require("swagger-autogen")()

const doc = {
    info: {
        version: "1.0.0",
        title: "My Brand News API",
        description: "My brand blog (andela)"
    },
    host: "localhost:8000",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            "name": "Auth",
            "description": "Auth endpoints"
        },
        {
            "name": "Admin",
            "description": "Admin endpoints"
        },
        {
            "name": "Profile",
            "description": "Profile endpoints"
        },
        {
            "name": "User",
            "description": "User endpoints"
        },
    ],
    securityDefinitions: {
        Authorization: {
            type: "apiKey",
            name: "Authorization",
            description: "Value: Bearer ",
            in: "header",
            scheme: 'bearer'
        }
    },
    definitions: {
        LoginModel: {
            $email: "admin@test.com",
            $password: "Password123#",            
        },
        RegisterModel: {
            $name: "John Doe",
            $email: "johndpe@test.com",
            $password: "Password123#", 
        },
        PostModel: {
            $title: "Elon Musk Admits He Wants to Travel to Mars Because No One Hates Him There Yet",
            image: "https://res.cloudinary.com/dilpmyf5d/image/upload/v1677136990/bugblog/vtcdimegu9iaijmjkrbe.webp",
            cloudinaryId: "bugblog/vtcdimegu9iaijmjkrbe",
            content: "AUSTIN, Texas — Wiping tears from his eyes at a recent press conference, SpaceX CEO Elon Musk revealed that the reason he’s so keen on traveling to Mars is not for the potential benefits to science, but because it’s the one place he can think of where no one hates him yet.",
            // author: "Admin",
            // author_id: "63f7136cc5c56bc88082dca2"
        },
        CommentModel: {
            $post: "63f716d8c5c56bc88082dd0a",
            $name: "John",
            $comment: "That's very funny (:",
        },
    }
};

const outputFile = "./swagger_output.json";
const endpointFiles = ["../routes/index.js"];

swaggerAutogen(outputFile, endpointFiles, doc).then(() => {
    require("./index");
});