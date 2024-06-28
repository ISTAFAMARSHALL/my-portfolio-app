import Image from "next/image";

const TabBarItem = ({ item }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image src={item.screenshots} alt={item.title} width={50} height={50} />
            <span>{item.title}</span>
        </div>
    );
};

export default function TabBar({ items }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
            {items.map((item, index) => (
                <TabBarItem key={index} item={item} />
            ))}
        </div>
    );
}
