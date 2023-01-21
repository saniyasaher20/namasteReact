const Shimmer = () => {
    return (
        <>
            <div className="container card-parent">

                {Array(10)
                    .fill("")
                    .map((e, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="shimmer" ></div>
                            </div>
                        )
                    }
                    )}

            </div>
        </>
    );
}

export default Shimmer;