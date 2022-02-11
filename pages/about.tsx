// Material UI
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Get Layout
import { getLayout } from '../layouts/PublicLayout';

// Type
import { NextPageWithLayout } from '../customTypes/types';


const About = () => {
    return (
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
            {/* <Link href="/about" color="secondary">
                Go to the about page
            </Link> */}
            {/* <ProTip /> */}
            {/* <Copyright /> */}
            </Box>
    )
}

About.getLayout = getLayout;

const AboutPage: NextPageWithLayout = About;

export default AboutPage;
