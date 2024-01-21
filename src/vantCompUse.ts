import { NavBar, Checkbox, CheckboxGroup, Icon, Field, Button, Form, Divider, Toast, Tabbar, TabbarItem, Image, Col, Row, Cell, Popup, ActionBar, ActionBarButton, Swipe, Tabs, SwipeItem, Tab, List, Empty, SidebarItem, Sidebar } from 'vant';

export default (app: any) => {
    app.use(SidebarItem);
    app.use(Sidebar);
    app.use(Empty);
    app.use(List);
    app.use(Swipe);
    app.use(Tabs);
    app.use(SwipeItem);
    app.use(Tab);
    app.use(NavBar);
    app.use(Checkbox);
    app.use(CheckboxGroup);
    app.use(Icon);
    app.use(Field);
    app.use(Button);
    app.use(Form);
    app.use(Divider);
    app.use(Toast);
    app.use(Tabbar);
    app.use(TabbarItem);
    app.use(Image);
    app.use(Col);
    app.use(Row);
    app.use(Cell);
    app.use(Popup);
    app.use(ActionBar);
    app.use(ActionBarButton);
}