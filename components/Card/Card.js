import Link from "next/link";
import styles from "./Card.module.scss";

const Card = ({ isInternalLink, link, title, introduction, cityState }) => {
	const LinkComponent = isInternalLink ? Link : "a";
	return (
		<LinkComponent
			className={styles.card}
			href={link}
			target={isInternalLink ? "" : "_blank"}
		>
			<h3>{title}</h3>
			<p>{introduction}</p>
			<div className={styles.tags}>
				<span>{cityState}</span>
			</div>
		</LinkComponent>
	);
};

export default Card;
