import classes from "./header.module.css";



function Header() {
    

    return <header className={classes.header}>
       <div className={classes["header__text-box"]}>
        <h1 className={classes["heading-primary"]}>
          <span className={classes["heading-primary--main"]}>Heart beat</span>
          <span className={classes["heading-primary--sub"]}>Easy way to track the beats</span>
        </h1>
      </div>
    </header>
}

export default Header;