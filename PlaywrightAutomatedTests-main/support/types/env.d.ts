export { };
 
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit" | "android" | "iphone",
            ENV: "staging" | "prod" | "qa",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }
}