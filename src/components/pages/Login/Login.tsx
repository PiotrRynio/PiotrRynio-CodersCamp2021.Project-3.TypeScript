import styles from "./Login.module.css";
import { Logo } from "../../atoms";

export function Login() {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <Logo isTextLogo={true} />
          <input
            placeholder="Email Address"
            type="text"
            className={styles.input}
          />
          <input
            placeholder="Password"
            type="password"
            className={styles.input}
          />
          <div>
            <input id="checkbox" type="checkbox" />
            <label htmlFor="checkbox">Remember me!</label>
          </div>
          <button className={styles.button} type="submit">
            Sign In
          </button>
          <div>
            <a href="#">Forgot password?</a>
            <a href="#">Don’t have an account? Sign Up</a>
          </div>
        </form>
      </div>
    </>
  );
}
