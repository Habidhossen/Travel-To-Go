import React from "react";

const Blogs = () => {
  return (
    <div className="container mt-5 bg-light p-5 border-5">
      <h5>Difference between authorization and authentication?</h5>
      <p className="mb-4">
        Authentication is the process of verifying who someone is, and
        Authorization is the process of verifying what specific applications,
        and data a user has access to. Authentication is done before the
        authorization process. The Otherside authorization process is done after
        the authentication process. Authentication needs usually the user’s
        login details and authorization needs the user’s privilege or security
        levels. Mainly authentication process, users or persons are verified and
        authorization process, users or persons are validated.
      </p>
      <h5>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h5>
      <p className="mb-4">
        I using firebase because it's provides multiple ways of authenticating
        users. There are many options for authentications, for a self-hosted
        solution, Keycloak is a pretty robust option. For service, Auth0 and
        Okta have quite a lot of features. They also offer a free trial with
        reasonable limits.
      </p>
      <h5>
        What other services does firebase provide other than authentication?
      </h5>
      <p>
        Firebase is originally developed by Firebase inc and later acquired by
        Google. It provides different kinds of services that help to develop
        high-quality mobile and web applications. There are lots of services
        that provide firebase, which are Cloud Storage, Hosting, Authentication,
        Cloud messaging, Real-time Database, and the Cloud function, etc.
        Firebase is full of packages for developing mobile and web development.
      </p>
    </div>
  );
};

export default Blogs;
