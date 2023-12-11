import React, { useEffect, useState } from "react";
import { IgrPieChart } from "igniteui-react-charts";
import Papa from "papaparse";

interface PieChartData {
  ClassItem: string;
  ChartId?: number;
  Label: string;
  Value: number;
  Professor: string;
  ChartType: string;
}

interface PieChartProps {
  classItem?: string;
  chartId?: number;
}

const PieChart: React.FC<PieChartProps> = ({ classItem, chartId }) => {
  const [data, setData] = useState<PieChartData[]>([]);
  const [loading, setLoading] = useState(true);
  const [Professor, setProfessor] = useState<string | undefined>();
  const [ChartType, setChartType] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ChartData.csv");
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
              }) as PieChartData[];
              if (filteredData.length > 0) {
                setProfessor(filteredData[0].Professor);
              }
              if (filteredData.length > 0) {
                setChartType(filteredData[0].ChartType);
              }
              console.log(
                `classItem: ${classItem}, chartId: ${chartId}, filteredData:`,
                filteredData
              );
              // Create a new array for each classItem and chartId combination
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
    <div
      className="pie-chart-container"
      style={{
        width: "300%",
        height: "300%",
      }}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {Professor && ChartType && (
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              <div style={{ fontSize: "150%" }}>{Professor} </div>
              <div>{ChartType}</div>
            </p>
          )}
          <IgrPieChart
            dataSource={data}
            valueMemberPath="Value"
            startAngle="0"
            labelMemberPath="Label" // Use the modified label
            labelsPosition="BestFit"
            brushes="#ff5500,#006aff, #9500ff,#ff006a,#8b80ff"
            leaderLineType="Straight" // Set the leader line type
            leaderLineMargin={0} // Set the margin between the pie slice and the label
            radiusFactor=".8"
            width="100%"
            height="100%"
          />
        </>
      )}
    </div>
  );
};

export default PieChart;
