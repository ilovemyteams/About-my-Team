interface ServiceHeroProps {
    title: string;
    text: string;
    image: string;
}

export const ServiceHero = ({ title }: ServiceHeroProps) => {
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};
