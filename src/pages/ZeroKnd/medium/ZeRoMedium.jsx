import React, { useState } from 'react';
import QuestionComp from '../../../components/QuestionComp';
import zerokwg from '../../../data/zerokwg.json';

 export default function ZeRoMedium() {
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const questionsPerPage = 5;

  // Filter for easy questions
  const mediumQuestions = zerokwg.zeroknowledgeproof.medium;
  // Get the current set of easy questions to display
  const currentQuestions = mediumQuestions.slice(0, questionsPerPage);

  return (
    <div>
      {currentQuestions.map((question) => (
        <div key={question.id}> {/* Use question.id for unique key */}
          <QuestionComp
            question={question}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
      ))}
    </div>
  );
}
