import React, { useEffect, useState } from "react";
import Papa from "papaparse";

interface ReviewProps {
  ClassItem: string;
  ChartId?: number;
  Author: string;
  Professor: string;
  Likes: string;
  Dislikes: string;
  Other: string;
  Engagement: number;
  Difficulty: number;
  TakeAgain: string;
  ForMajor: string;
  Date: string;
}

interface ReviewComponentProps {
  classItem?: string;
  chartId?: number;
}

const Review: React.FC<ReviewComponentProps> = ({ classItem, chartId }) => {
  const [data, setData] = useState<ReviewProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ReviewData.csv"); // Adjust the path to your CSV file
        const reader = response.body?.getReader();

        if (reader) {
          const result = await reader.read();
          const text = new TextDecoder("utf-8").decode(result.value);

          Papa.parse(text, {
            header: true,
            dynamicTyping: true,
            complete: (result) => {
              // Filter data based on the provided classItem and chartId
              const filteredData = result.data.filter((item: any) => {
                return (
                  item.ClassItem === classItem &&
                  (chartId === undefined || item.ChartId === chartId)
                );
              }) as ReviewProps[];

              setData(filteredData);
              setLoading(false);
            },
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [classItem, chartId]);

  return (
    <div className="review">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((review, index) => (
            <div
              key={index}
              className="single-review"
              style={{
                paddingTop: review.ChartId === 1 ? "15%" : "0%",
              }}
            >
              <br></br>
              <div className="single">
                <p
                  className="Professor-title"
                  style={{ height: 50, fontSize: 30 }}
                >
                  <strong>{review.Professor}</strong>
                </p>
                <p>
                  <strong>Author:</strong> {review.Author} |{" "}
                  <strong>Engagement:</strong> {review.Engagement}/10 |
                  <strong>Difficulty:</strong> {review.Difficulty}/10 |
                  <strong>For Major:</strong> {review.ForMajor} |
                  <strong style={{ textAlign: "right" }}> {review.Date}</strong>
                </p>
                <p>
                  <strong>Likes:</strong> {review.Likes}
                </p>
                <p>
                  <strong>Dislikes:</strong> {review.Dislikes}
                </p>
                <p>
                  <strong>Other:</strong> {review.Other}
                </p>
                <p>
                  <strong>Take Again:</strong> {review.TakeAgain}
                </p>
              </div>
              <br></br>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Review;
