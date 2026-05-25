function BossInfoSection({ title, children, className = "" }) {

    return (

        <div className={`boss-info-card ${className}`}>

            <div className="card-title">

                <h4>{title}</h4>

            </div>

            {children}

        </div>

    );
}

export default BossInfoSection;