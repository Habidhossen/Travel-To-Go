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
        users.
      </p>
      <h5>
        What other services does firebase provide other than authentication?
      </h5>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque magni
        totam consequuntur temporibus aliquam cupiditate, quo possimus sit
        consectetur quam. Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Cumque magni totam consequuntur temporibus aliquam cupiditate, quo
        possimus sit consectetur quam.
      </p>
    </div>
  );
};

export default Blogs;
