
export default function EntryGrid({entries}) {
    return (
        <div className="entry-grid" style={{
            alignSelf: "center",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr));",
            rowGap: "50px",
            columnGap:"0px",
            width: "80%"
        }}>
            {entries}
        </div>
    );
}