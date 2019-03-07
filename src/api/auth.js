const authApi = {
  login: async (email, password) => {
    const mockedRequest = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ errorMessage: "The specified credentials are invalid" });
      }, 2000);
    });

    return await mockedRequest;
  }
};

export default authApi;
