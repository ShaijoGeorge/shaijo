import { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import FadeInSection from "./FadeInSection";

const JobList = () => {
  const [value, setValue] = useState(0);

  const experienceItems = {
    "COFSO": {
      jobTitle: "Junior Software Engineer @",
      duration: "MAR 2025 - PRESENT",
      desc: [
        "Develop and maintain a product-based ERP web application using PHP and the Symfony framework, supporting multi-organization and franchise-based workflows.",
        "Designed and implemented Role-Based Access Control (RBAC) and audit logging mechanisms to track user activities and enforce security and compliance requirements.",
        "Built multi-tenant data isolation architecture with organization and franchise-level filtering to ensure secure and scalable access to shared resources.",
        "Implemented advanced custom filtering and optimized data retrieval logic across Symfony controllers and Twig templates to improve performance and user experience.",
        "Collaborate in an agile, cross-functional team environment using Jira for sprint planning, Slack for communication, and Bitbucket for version control and code reviews."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isMobile = window.innerWidth < 600;

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: 300 }}>
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant={isMobile ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--lightest-navy)",
          "& .MuiTab-root": {
            color: "var(--lightest-slate)",
            fontFamily: "NTR, sans-serif",
            fontSize: "16px",
            textAlign: "left",
            alignItems: "flex-start",
            textTransform: "none",
            minWidth: isMobile ? "auto" : 120,
          },
          "& .Mui-selected": {
            color: "var(--green-bright) !important",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--green-bright)",
          },
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={i} label={isMobile ? `0${i + 1}.` : key} />
        ))}
      </Tabs>
      
      {Object.keys(experienceItems).map((key, i) => (
        <Box
          key={i}
          role="tabpanel"
          hidden={value !== i}
          sx={{ p: 3, flex: 1 }}
        >
          {value === i && (
            <Box>
              <Typography
                component="span"
                sx={{
                  fontFamily: "NTR, sans-serif",
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "var(--lightest-slate)",
                }}
              >
                {experienceItems[key]["jobTitle"]}{" "}
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontFamily: "NTR, sans-serif",
                  fontSize: "28px",
                  color: "var(--green-bright)",
                  fontWeight: "bold",
                }}
              >
                {key}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "NTR, sans-serif",
                  fontSize: "18px",
                  color: "var(--slate)",
                  mt: 1,
                }}
              >
                {experienceItems[key]["duration"]}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", pl: 0, mt: 3 }}>
                {experienceItems[key]["desc"].map((descItem, j) => (
                  <FadeInSection key={j} delay={`${j + 1}00ms`}>
                    <Typography
                      component="li"
                      sx={{
                        position: "relative",
                        paddingLeft: "30px",
                        paddingBottom: "16px",
                        fontSize: "18px",
                        color: "var(--slate)",
                        fontFamily: "NTR, sans-serif",
                        "&::before": {
                          content: '"▹"',
                          color: "var(--green-bright)",
                          position: "absolute",
                          left: 0,
                        },
                      }}
                    >
                      {descItem}
                    </Typography>
                  </FadeInSection>
                ))}
              </Box>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default JobList;