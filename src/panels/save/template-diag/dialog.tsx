import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
    ListItem,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    DialogActions,
    Button,
    createStyles,
    makeStyles,
    Tabs,
    Tab,
    Typography,
    useTheme,
    useMediaQuery,
} from '@material-ui/core';
import { getTransText2 } from '../../../utils';
import { companies, templateList } from './data';

interface TemplateDialogProps {
    open: boolean;
    onClose: () => void;
}

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
                paddingTop: 0,
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
            },
            [theme.breakpoints.up('sm')]: {
                height: 350,
            },
        },
        tab: {
            minWidth: 0,
            [theme.breakpoints.down('xs')]: {
                minWidth: 'calc(100% / 3)',
            },
        },
        tabpanel: {
            flex: 1,
            overflow: 'auto',
            minWidth: 220,
        },
    })
);

const NewDialog = (props: TemplateDialogProps) => {
    const { t, i18n } = useTranslation();
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const [tabValue, setTabValue] = React.useState(0);
    const selectedCompany = companies[tabValue].id;

    const handleClick = (filename: string) => () => {
        import(/* webpackChunkName: "templates" */ `./templates/${selectedCompany}/${filename}`)
            .then(module => {
                localStorage.rmgParam = JSON.stringify(module.default);
                window.location.reload(true);
            })
            .catch(err => console.error(err));
    };

    return React.useMemo(
        () => (
            <Dialog open={props.open} onClose={() => props.onClose()}>
                <DialogTitle>{t('file.new.title')}</DialogTitle>
                <DialogContent dividers className={classes.root}>
                    <Tabs
                        value={tabValue}
                        orientation={isMobile ? 'horizontal' : 'vertical'}
                        variant="scrollable"
                        scrollButtons="off"
                        indicatorColor="primary"
                        onChange={(_, value) => setTabValue(value)}
                    >
                        {companies.map(c => (
                            <Tab key={c.id} label={getTransText2(c.name, i18n.languages)} className={classes.tab} />
                        ))}
                    </Tabs>
                    <Typography component="div" role="tabpanel" className={classes.tabpanel}>
                        <List disablePadding>
                            {templateList[companies[tabValue].id].map(temp => (
                                <ListItem button onClick={handleClick(temp.filename)} key={temp.filename}>
                                    <ListItemText primary={getTransText2(temp.name, i18n.languages)} />
                                </ListItem>
                            ))}
                        </List>
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={() => props.onClose()} color="primary" autoFocus>
                        {t('dialog.cancel')}
                    </Button>
                </DialogActions>
            </Dialog>
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.open, tabValue, isMobile, i18n.language, JSON.stringify(classes)]
    );
};

export default NewDialog;
