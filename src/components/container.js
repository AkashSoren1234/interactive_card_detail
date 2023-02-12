import classes from "./container.module.css";

function Container(props) {
  return <main className={classes.container}>{props.children}</main>;
}

export default Container;
