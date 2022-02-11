// import
import React from 'react';
import { useRouter } from 'next/router'

// Material UI
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { 
    AppBar,
    Drawer,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

// Constants
import { drawerWidth, getNavList } from '../constants/Routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);


const NavBar = () => {
  const history = useRouter();
  const classes = useStyles();
  const navList = getNavList();

  return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Typography
          variant="h1"
          component="h2"
          onClick={(e: { preventDefault: () => void; })=> {
            e.preventDefault();
            history.push("/");
          }}
        >
          Jovial
        </Typography>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {navList.map((navItem, index) => (
            <>
              <ListItem 
                button
                key={navItem.label}
                onClick={(e)=> {
                  e.preventDefault();
                  history.push(navItem.url);
                }}
              >
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={navItem.label} />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Drawer>
  );
};

export default NavBar;
