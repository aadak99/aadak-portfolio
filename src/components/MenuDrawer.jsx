import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ConstructionIcon from '@mui/icons-material/Construction';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as LinkBase} from "@mui/material"
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      bgcolor={'rgba(65, 93, 67, 1)'}
      display={'flex'}
      justifyContent={'center'}
    >
      <List>
        {['Projects'].map((text, index) => (
            <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemIcon>
                {index === 0 ? <AutoStoriesIcon /> : index === 1 ? <ConstructionIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} sx={{color: 'rgba(161, 204, 165, 1)'}}><MenuIcon /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}