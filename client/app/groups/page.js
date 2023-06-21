import { CreateButton, GroupsCard } from '@/components'
import styles from '@/styles/pages/groups.module.scss'

const Groups = () => {
    return (
        <section id="groupsScreen">
            <div className={styles.groupsContainer__head}>
                <h2 className={styles.groupsContainer__head__title}>Groups</h2>
            </div>

            <div className={styles.groupsContainer__groups}>
                <GroupsCard />
                <GroupsCard />
                <GroupsCard />
                <GroupsCard />
                <GroupsCard />
            </div>

            <CreateButton btnText="New Group" />
        </section>
    )
}

export default Groups