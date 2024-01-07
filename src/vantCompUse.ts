import { NavBar, Checkbox, CheckboxGroup, Icon, Field, Button, Form, Divider, Toast, Tabbar, TabbarItem, Image, Col, Row, Cell } from 'vant';

export default (app: any) => {
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
}