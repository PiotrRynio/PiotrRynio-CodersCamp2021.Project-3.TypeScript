import { Typography, Box } from "@mui/material";
import styles from "./MessageText.module.scss";

type MessageTextProps = {
  content: string;
  date: Date;
  isLast?: boolean;
};

export const MessageText = ({ content, date, isLast }: MessageTextProps) => {
  return (
    <Box className={styles.messageText}>
      <Typography variant="body1" noWrap component="div">
        {content}
      </Typography>
      {isLast ? (
        <Typography className={styles.date}>{dateAsString(date)}</Typography>
      ) : (
        <></>
      )}
    </Box>
  );
};

const dateAsString = (inputDate: Date): string => {
  const [day, month, year, hour, minutes] = [
    inputDate.getDate(),
    inputDate.getMonth() + 1,
    inputDate.getFullYear(),
    inputDate.getHours(),
    inputDate.getMinutes(),
  ];
  const date = `${day <= 9 ? "0" + day : day}.${
    month <= 9 ? "0" + month : month
  }.${year}`;
  const time = `${hour <= 9 ? "0" + hour : hour}:${
    minutes <= 9 ? "0" + minutes : minutes
  }`;
  return `${date} ${time}`;
};
