"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";

const TestPage = ({ params }: { params: { testId: string } }) => {
  const [testData, setTestData] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const router = useRouter();

  const testId = params.testId;

  useEffect(() => {
    const fetchTest = async () => {
      const docRef = doc(db, "tests", testId);
      console.log(testId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTestData(docSnap.data());
      } else {
        router.push("/dashboard"); // Redirecionar se o teste não existir
      }
    };

    fetchTest();
  }, [testId, router]);

  const handleAnswer = async (answerIndex: number) => {
    if (!testData) return;

    const updatedQuestions = [...testData.questions];
    updatedQuestions[currentQuestionIndex].userAnswer = answerIndex;

    await updateDoc(doc(db, "tests", testId), {
      questions: updatedQuestions,
    });

    if (currentQuestionIndex < testData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finalizar teste
      await updateDoc(doc(db, "tests", testId), {
        status: "completed",
        endTime: new Date().toISOString(),
      });
      router.push("/dashboard"); // Redirecionar após finalizar
    }
  };

  if (!testData) {
    return <div>Carregando teste...</div>;
  }

  const currentQuestion = testData.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-bold">Teste: {testData.interestArea}</p>
        <p className="text-lg">Tempo Restante: 10:00</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {currentQuestionIndex + 1}. {currentQuestion.questionText}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map((option: string, index: number) => (
            <button
              key={index}
              className="border rounded-lg p-4 hover:bg-blue-100"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
