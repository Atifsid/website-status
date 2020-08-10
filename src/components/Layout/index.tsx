import styles from "./Layout.scss";

type Props = {
  children?: React.ReactNode;
};

function Layout(props: Props) {
  const { children } = props;

  return <div className={styles.layout}>{children}</div>;
}

export default Layout;
