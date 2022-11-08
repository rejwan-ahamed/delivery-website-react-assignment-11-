import React from "react";
import UseTitle from "../Title";

const Blog = () => {
  UseTitle("Read blogs");
  return (
    <div>
      <div className="blog-main mt-20 mb-20 px-4 lg:px-20 xl:px-40">
        <h1 className="text-2xl font-[600] font-general">
          Difference between SQL and NoSQL
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          SQL is the programming language used to interface with relational
          databases. (Relational databases model data as records in rows and
          tables with logical links between them). NoSQL is a class of DBMs that
          are non-relational and generally do not use SQL.
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          What is JWT, and how does it work?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard
          (RFC 7519) for securely transmitting information between parties as
          JSON object. It is compact, readable and digitally signed using a
          private key/ or a public key pair by the Identity Provider(IdP).
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          What is the difference between javascript and Node JS?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          How NodeJS handle multiple client requests? NodeJS receives multiple
          client requests and places them into EventQueue. NodeJS is built with
          the concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
