//배포용
// export const url = 'http://3.131.48.123'
// export const url = 'https://api.hyejun.co.kr'

//테스트용(local back)
//export const url = "http://localhost:4000";
// import env from "dotenv";
// env.config();

// export const url =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3000"
//     : "ec2-13-125-221-244.ap-northeast-2.compute.amazonaws.com";

export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://ec2-13-125-221-244.ap-northeast-2.compute.amazonaws.com";
console.log(url);
