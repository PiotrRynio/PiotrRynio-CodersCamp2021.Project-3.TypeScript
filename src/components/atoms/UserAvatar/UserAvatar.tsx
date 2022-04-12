import { Avatar } from "@mui/material";
import styles from "./UserAvatar.module.scss";

type UserAvatarProps = {
  label: string;
  image?: string;
};

export const UserAvatar = ({ label, image }: UserAvatarProps) => {
  const imageDescription = "User avatar of " + label;
  return (
    <Avatar className={styles.avatarSize} alt={imageDescription} src={image}>
      {label[0]}
    </Avatar>
  );
};
