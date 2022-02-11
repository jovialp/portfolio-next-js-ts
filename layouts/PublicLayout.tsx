// import
import React from "react";
import Head from 'next/head'

// Material UI
import { CssBaseline, Container } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

// Components
import Page404 from "../components/Page404";
import NavBar from "../components/NavBar";

// Props Type Define
type Props = {
    children: React.ReactElement
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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

const PublicLayout = ({ children }: Props): React.ReactElement => {
    const classes = useStyles();

    return (
        <div className={classes.root} lang={"en"}>
            <Head>
                <title>Jovial P Thomas</title>
                <meta name="description" content="Experienced Web Developer with NextJS, ReactJS, NodeJS, Javascript, TypeScript, HTML5, CSS3, jQuery, Bootstrap, Angular, MongoDB and ExpressJS" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <CssBaseline />
            <main>
                <Container maxWidth="sm">
                    <NavBar />
                    {children ? children : <Page404 />}
                </Container>
            </main>
        </div>
    );
};

export const getLayout = (page: React.ReactElement): React.ReactElement => {
    return <PublicLayout>{page}</PublicLayout>
};

export default PublicLayout;
