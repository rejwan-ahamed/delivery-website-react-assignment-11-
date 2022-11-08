import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="blog-main mt-20 mb-20 px-4 lg:px-20 xl:px-40">
        <h1 className="text-2xl font-[600] font-general">what is cors?</h1>
        <p className="font-general font-medium mt-4 mb-4">
          CORS stands for Cross-Origin Resource Sharing . It allows us to relax
          the security applied to an API. This is done by bypassing the
          Access-Control-Allow-Origin headers, which specify which origins can
          access the API.Sep
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          Firebase helps you develop high-quality apps, grow your user base, and
          earn more money. Each feature works independently, and they work even
          better together. <br />
          Usually, authentication by a server entails the use of a user name and
          password. Other ways to authenticate can be through cards, retina
          scans, voice recognition, and fingerprints.
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          How does the private route work?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
        <h1 className="text-2xl font-[600] font-general mt-8">
          What is Node? How does Node work?
        </h1>
        <p className="font-general font-medium mt-4 mb-4">
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on a JavaScript Engine and executes JavaScript
          code outside a web browser, which was designed to build scalable
          network applications. <br />
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
