import { Avatar } from "@mui/material";
import styles from "./UserAvatar.module.scss";

export * from "./UserAvatar";

type userAvatarProps = {
  label: string;
  imageSrc?: string;
};

export const UserAvatar = ({ label, imageSrc }: userAvatarProps) => {
  return (
    <Avatar className={styles.avatarSize} alt={label} src={imageSrc}>
      {label[0]}
    </Avatar>
  );
};
