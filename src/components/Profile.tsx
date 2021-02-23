import styles from '../styles/components/Profile.module.css';
export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/15638599?s=460&u=7523c6153ebae01dd6f060e4c7063481a21c9a40&v=4" alt="Glen Leão"/>
            <div>
                <strong>Glen Leão</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    );
}