import React, {useState, useCallback} from 'react'

function useHttp() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applyData(data)
  
        const loadedTasks = [];
  
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
        
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        error: error,
        sendRequest: sendRequest
    }
}

export default useHttp