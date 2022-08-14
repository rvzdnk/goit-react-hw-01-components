import styles from './Container.module.css';

export const Container = ({children}) => {
  const {container} = styles;

  return (
    <div className={container}>
      {children}
    </div>
  )
}