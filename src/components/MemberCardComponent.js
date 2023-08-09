import React from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { YouTube } from "@mui/icons-material";

const MemberCard = styled(Card)({
  display: "flex",
  marginBottom: (theme) => theme.spacing(2),
  alignItems: "center",
});

const Media = styled(CardMedia)({
  width: 150,
  height: 150,
  objectFit: "cover",
  marginRight: (theme) => theme.spacing(2),
});

const Content = styled(CardContent)({
  flex: "1 0 auto",
  display: "flex",
  flexDirection: "column", // Stack children vertically
  alignItems: "center", // Center horizontally
  textAlign: "center",
});

const SocialIcons = styled("div")({
  display: "flex",
  justifyContent: "center", // Center horizontally
  marginTop: "auto", // Push social icons to the bottom
  paddingTop: "3px",
});

const SocialIconButton = styled(IconButton)({
  borderRadius: "10px", // Rounded edges
  backgroundColor: "#4d4b4b", // Lighter background color
  padding: "6px", // Adjust as needed
  margin: "0 5px", // Adjust as needed
  "&:hover": {
    backgroundColor: "#e0e0e0", // Lighter background color on hover
  },
});

const MemberCardComponent = ({
  image,
  instrument,
  name,
  pronouns,
  description,
  instagram,
  twitter,
  youtube,
}) => {
  return (
    <MemberCard>
      <Content>
        <Media component="img" src={image} alt={name} />
        <Typography variant="h6" style={{ color: "#FF7575" }}>
          {name}
        </Typography>
        <Typography variant="subtitle1">{instrument}</Typography>
        <Typography variant="body2">{pronouns}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <SocialIcons>
          {instagram && (
            <SocialIconButton
              color="primary"
              component={Link}
              href={instagram}
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon />
            </SocialIconButton>
          )}
          {twitter && (
            <SocialIconButton
              color="primary"
              component={Link}
              href={twitter}
              target="_blank"
              rel="noopener"
            >
              <TwitterIcon />
            </SocialIconButton>
          )}
          {youtube && (
            <SocialIconButton
              color="primary"
              component={Link}
              href={youtube}
              target="_blank"
              rel="noopener"
            >
              <YouTube />
            </SocialIconButton>
          )}
        </SocialIcons>
      </Content>
    </MemberCard>
  );
};

export default MemberCardComponent;
