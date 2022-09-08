import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export const AccountProfile = ({ user }) => {
  const { firstName, lastName, phoneNumber, address } = user;

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Avatar
            src="https://material-kit-react.devias.io/static/images/avatars/avatar_6.png"
            sx={{
              height: 64,
              mb: 2,
              width: 64,
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h5">
            {firstName} {lastName}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {`${address}`}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {phoneNumber}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
