import { IChatInFeedMessageProps } from "../../model/types";
import styles from "./style.module.scss";

export function ChatInFeedMessage({
  message,
  rightContent,
}: IChatInFeedMessageProps) {
  return (
    <div className={styles.messageContinainer}>
      <p className={styles.message}>{message}</p>
      {rightContent}
    </div>
  );
}
