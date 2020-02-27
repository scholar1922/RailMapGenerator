import * as React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Icon, Divider, Button, ListItemIcon, RadioGroup, FormControlLabel, Radio, Switch, Chip, withStyles, Dialog, DialogTitle, DialogContent, Avatar, TextField, DialogActions } from '@material-ui/core';
import { StationTransfer, InterchangeInfo, Name } from '../types';
import ColourDialog from './panel-colour-diag';

interface StationEditInterchangeTabProps {
    stnTrans: StationTransfer;
    onUpdate: (trans: StationTransfer) => void;
}

interface StationEditInterchangeTabState {
    osiNameDialogOpened: boolean;
}

export default class StationEditInterchangeTab extends React.Component<StationEditInterchangeTabProps, StationEditInterchangeTabState> {
    constructor(props) {
        super(props);

        this.state = {
            osiNameDialogOpened: false,
        }
    }

    addClick(index: number) {
        let ns = this.props.stnTrans.info.map(inf => inf.length);
        if (ns.length === 1) {ns[1] = 0;}
        ns[index] += 1;
        let changeType: string;
        if (ns[0] === 3 && ns[1] === 0) {
            changeType = 'int3'; // was int4
        } else if (ns[0] === 2 && ns[1] === 1) {
            changeType = 'osi31';
        } else if (ns[0] === 2 && ns[1] === 0) {
            changeType = 'int3'
        } else if (ns[0] === 1 && ns[1] === 2) {
            changeType = 'osi22'; 
        } else if (ns[0] === 1 && ns[1] === 1) {
            changeType = 'osi21';
        } else if (ns[0] === 1 && ns[1] === 0) {
            changeType = 'int2';
        } else if (ns[0] === 0 && ns[1] === 3) {
            changeType = 'osi13';
        } else if (ns[0] === 0 && ns[1] === 2) {
            changeType = 'osi12';
        } else if (ns[0] === 0 && ns[1] === 1) {
            changeType = 'osi11';
        } else if (ns[0] === 0 && ns[1] === 0) {
            changeType = 'none';
        } else {
            // sum(ns) > 3
            changeType = 'int3';
        }
        console.log(changeType);
        if (this.props.stnTrans.info.length === 1 && index === 1) {
            let transInfo = {
                ...this.props.stnTrans,
                type: changeType as any, 
                osi_names: changeType.includes('osi') ? [this.props.stnTrans.osi_names[0] || ['車站名','Stn Name']] : [], 
                info: this.props.stnTrans.info.concat([[[,,,,,,]]])
            }
            console.log(transInfo)
            this.props.onUpdate(transInfo);
        } else {
            let transInfo = {
                ...this.props.stnTrans,
                type: changeType as any, 
                osi_names: changeType.includes('osi') ? [this.props.stnTrans.osi_names[0] || ['車站名','Stn Name']] : [], 
                info: this.props.stnTrans.info
                    .map((inf, idx) => idx===index ? 
                        inf.concat([[,,,,,,]]) : inf)
            }
            console.log(transInfo)
            this.props.onUpdate(transInfo);
        }
    }

    deleteClick(index: number, i: number) {
        let ns = this.props.stnTrans.info.map(inf => inf.length);
        if (ns.length === 1) {ns[1] = 0;}
        ns[index] -= 1;
        let changeType: string;
        if (ns[0] === 3 && ns[1] === 0) {
            changeType = 'int3'; // was int4
        } else if (ns[0] === 2 && ns[1] === 1) {
            changeType = 'osi31';
        } else if (ns[0] === 2 && ns[1] === 0) {
            changeType = 'int3'
        } else if (ns[0] === 1 && ns[1] === 2) {
            changeType = 'osi22'; 
        } else if (ns[0] === 1 && ns[1] === 1) {
            changeType = 'osi21';
        } else if (ns[0] === 1 && ns[1] === 0) {
            changeType = 'int2';
        } else if (ns[0] === 0 && ns[1] === 3) {
            changeType = 'osi13';
        } else if (ns[0] === 0 && ns[1] === 2) {
            changeType = 'osi12';
        } else if (ns[0] === 0 && ns[1] === 1) {
            changeType = 'osi11';
        } else if (ns[0] === 0 && ns[1] === 0) {
            changeType = 'none';
        } else {
            // sum(ns) > 3
            changeType = 'int3';
        }
        console.log(changeType);

        let transInfo = {
            ...this.props.stnTrans, 
            type: changeType as any,
            osi_names: changeType.includes('osi') ? [this.props.stnTrans.osi_names[0] || ['車站名','Stn Name']] : [], 
            info: this.props.stnTrans.info
                .map((inf, idx) => idx===index ? inf.slice(0,i).concat(inf.slice(i+1)) : inf)
        };
        console.log(transInfo)
        this.props.onUpdate(transInfo);
    }

    chipUpdate(index: number, val: InterchangeInfo[]) {
        let transInfo = {
            ...this.props.stnTrans, 
            info: this.props.stnTrans.info
                .map((inf, idx) => idx===index ? val : inf),
        }
        console.log(transInfo)
        this.props.onUpdate(transInfo);
    }

    osiNameUpdate(value: string, index: number) {
        let transInfo = {
            ...this.props.stnTrans, 
            osi_names: [this.props.stnTrans.osi_names[0] ? 
                this.props.stnTrans.osi_names[0].map((val, idx) => idx===index ? value : val) :
                ['',''].map((val, idx) => idx===index ? value : val)
            ] as Name[],
        };
        this.props.onUpdate(transInfo);
    }

    tickDirecChange(event: React.ChangeEvent<HTMLInputElement>) {
        let transInfo = {
            ...this.props.stnTrans, 
            tick_direc: event.target.value as 'l' | 'r',
        };
        this.props.onUpdate(transInfo);
    }

    paidAreaChange(event) {
        let transInfo = {
            ...this.props.stnTrans, 
            paid_area: event.target.checked, 
        };
        this.props.onUpdate(transInfo);
    }

    render() {
        return (
            <List>
                <ListItem>
                    <ListItemText>
                        <h3 style={{margin: 0}}>Within-station Interchange</h3>
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton onClick={() => this.addClick(0)}>
                            <Icon>add_circle</Icon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <StyledInterchangeChipSet
                        intInfos={this.props.stnTrans.info[0]}
                        onDelete={(i) => this.deleteClick(0, i)}
                        onUpdate={(val) => this.chipUpdate(0, val)}/>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText>
                        <h3 style={{margin: 0}}>Out-of-station Interchange</h3>
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <Button
                            variant="outlined" color="primary"
                            style={{lineHeight: '1rem', whiteSpace: 'pre', marginRight: 5}}
                            onClick={() => this.setState({osiNameDialogOpened: true})}
                        >
                            {this.props.stnTrans.osi_names[0] ? this.props.stnTrans.osi_names[0].join('\r\n') : '車站名\r\nStn Name'}
                        </Button>
                        <OSINameDialog
                            open={this.state.osiNameDialogOpened}
                            osiName={this.props.stnTrans.osi_names[0] || ['', '']}
                            onClose={() => this.setState({osiNameDialogOpened: false})}
                            onUpdate={this.osiNameUpdate.bind(this)} />
                        <IconButton onClick={() => this.addClick(1)}>
                            <Icon>add_circle</Icon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <StyledInterchangeChipSet
                        intInfos={this.props.stnTrans.info[1] || []} 
                        onDelete={(i) => this.deleteClick(1, i)}
                        onUpdate={(val) => this.chipUpdate(1, val)}
                    />
                </ListItem>
                <ListItem>
                    <span>
                        Please note that some combinations of interchanges may not be displayed properly.
                    </span>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText>
                        <h3 style={{margin: 0}}>More Settings</h3>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Icon>format_textdirection_l_to_r</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Text Direction" />
                    <ListItemSecondaryAction>
                        <RadioGroup name="tick_direc" row
                            value={this.props.stnTrans.tick_direc}
                            onChange={this.tickDirecChange.bind(this)}
                        >
                            <FormControlLabel
                                value="l"
                                control={<Radio color="secondary" />}
                                label="Left"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="r"
                                control={<Radio color="secondary" />}
                                label="Right"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <Icon>attach_money</Icon>
                    </ListItemIcon>
                    <ListItemText primary="OSI within Paid Area" />
                    <ListItemSecondaryAction>
                        <Switch
                            edge="end"
                            onChange={this.paidAreaChange.bind(this)}
                            checked={this.props.stnTrans.paid_area}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        )
    }
}

// const NameDialog = React.lazy(() => import(/* webpackChunkName: "panelNameDiag" */ './panel-name-diag'));\

const intChipSetStyles = {
    intChip: {
        borderRadius: 4.5,
        height: 40,
        lineHeight: '1rem',
        margin: 2
    }, 
    intChipText: {
        display: 'block',
        textAlign: 'center' as 'center'
    },
    intChipTextZH: {
        fontSize: 18, 
        fontFamily: 'Helvetica, Noto Serif KR, Noto Serif JP, Noto Serif TC, Noto Serif SC, serif', 
        lineHeight: '1.2rem',
    }, 
    intChipTextEN: {
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '.75rem', 
        lineHeight: '.9rem', 
        whiteSpace: 'pre-wrap' as 'pre-wrap'
    }, 
    intChipLabel: {
        paddingLeft: 6, 
        paddingRight: 6,
    }, 
    intChipDeleteIcon: {
        marginLeft: -3
    }
}

interface InterchangeChipSetProps {
    classes: any;
    intInfos: InterchangeInfo[];
    onDelete: (i: number) => void;
    onUpdate: (value: InterchangeInfo[]) => void;
}

interface InterchangeChipSetState {
    chipSelected: number;
    nameDialogOpened: boolean;
    nameDialogTheme: [string, string, string, '#000' | '#fff'];
    nameDialogName: Name;
}

class InterchangeChipSet extends React.Component<InterchangeChipSetProps, InterchangeChipSetState> {
    constructor(props) {
        super(props);

        this.state = {
            chipSelected: 0, 
            nameDialogOpened: false,
            nameDialogTheme: [] as any as [string, string, string, '#000' | '#fff'], 
            nameDialogName: [] as any as Name,
        }
    }

    handleClick(index: number) {
        this.setState({
            nameDialogTheme: [
                this.props.intInfos[index][0], 
                this.props.intInfos[index][1], 
                this.props.intInfos[index][2], 
                this.props.intInfos[index][3] as '#fff' | '#000', 
            ], 
            nameDialogName: [
                this.props.intInfos[index][4], 
                this.props.intInfos[index][5], 
            ], 
            nameDialogOpened: true, 
            chipSelected: index,
        })
    }

    nameDialogUpdate(key, value) {
        if (key === 'theme') {
            let newInfos = this.props.intInfos
                .map((inf, idx) => idx===this.state.chipSelected ? [
                    ...value as string[], inf[4], inf[5]
                ] as any as InterchangeInfo : inf);
            this.props.onUpdate(newInfos);
            this.setState({nameDialogTheme: value});
            console.log(newInfos)
        }
        if (key === 'name') {
            let newInfos = this.props.intInfos
                .map((inf, idx) => idx===this.state.chipSelected ? [
                    inf[0], inf[1], inf[2], inf[3], value[0], value[1]
                ] as any as InterchangeInfo : inf);
            this.props.onUpdate(newInfos);
            this.setState({nameDialogName: value});
            console.log(newInfos)
        }
    }

    render() {
        let { classes } = this.props;
        let intChips = this.props.intInfos.map((intInfo, i) => {
            let label = (
                <span style={{color: intInfo[3]}}>
                    <span className={`${classes.intChipText} ${classes.intChipTextZH}`}>
                        {intInfo[4]}
                    </span>
                    <span className={`${classes.intChipText} ${classes.intChipTextEN}`}>
                        {intInfo[5]}
                    </span>
                </span>
            )
            return (
                <Chip 
                    key={i} 
                    label={label}
                    className={classes.intChip}
                    classes={{
                        label: classes.intChipLabel, 
                        deleteIcon: classes.intChipDeleteIcon
                    }}
                    style={{backgroundColor: intInfo[2]}}
                    onDelete={() => this.props.onDelete(i)}
                    onClick={() => this.handleClick(i)} />
            )
        })
        return (
            <div>
                {intChips}

                <ColourDialog
                    open={this.state.nameDialogOpened}
                    theme={this.state.nameDialogTheme} lineName={this.state.nameDialogName}
                    onUpdate={this.nameDialogUpdate.bind(this)}
                    onClose={() => this.setState({nameDialogOpened: false})}
                />
            </div>
        )
    }
}

const StyledInterchangeChipSet = withStyles(intChipSetStyles)(InterchangeChipSet);

interface OSINameDialogProps {
    open: boolean;
    osiName: Name;
    onUpdate: (value: string, index: number) => void;
    onClose: () => void;
}

class OSINameDialog extends React.Component<OSINameDialogProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Dialog open={this.props.open} onClose={this.props.onClose}>
                <DialogTitle>Edit OSI Names</DialogTitle>
                <DialogContent dividers>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar>漢</Avatar>
                            </ListItemIcon>
                            <TextField 
                                style={{width: '100%'}}
                                variant="outlined"
                                label="Name (in Chinese characters)"
                                onChange={(e) => this.props.onUpdate(e.target.value, 0)}
                                value={this.props.osiName[0]} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Avatar>A</Avatar>
                            </ListItemIcon>
                            <TextField 
                                style={{width: '100%'}}
                                variant="outlined"
                                label="Name (in Latin characters)"
                                onChange={(e) => this.props.onUpdate(e.target.value, 1)}
                                value={this.props.osiName[1]}
                                helperText="Use a backslash (\) to wrap text" />
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} color="primary" autoFocus>
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}