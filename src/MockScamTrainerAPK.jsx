import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎯 EDIT YOUR SCENARIO TREE HERE - SUPER SIMPLE!
 * ═══════════════════════════════════════════════════════════════════════
 * 
 * Just follow this pattern for each question:
 * 
 * 1. Give it a unique ID (like "q1", "q2", "ending1", etc.)
 * 2. Add a title (for the breadcrumb trail)
 * 3. Add your video URL
 * 4. Write your question prompt
 * 5. Say where "Haan" goes (next question ID or null)
 * 6. Say where "Nahi" goes (next question ID or null)
 * 7. (Optional) Add custom button labels: yesLabel and noLabel
 * 8. Set outcome if it's an ending (Safe/Scammed/ShareInfo or null)
 * 
 * For NUMBER INPUT nodes:
 * - Set type: "numberInput"
 * - Add prompt for the input
 * - Add constraints array with conditions and nextNodeId
 * - Example: constraints: [{ condition: (val) => val > 1000, nextNodeId: "q10" }, { condition: (val) => val <= 1000, nextNodeId: "q11" }]
 * 
 * That's it! The app handles everything else automatically.
 */

const SCENARIO_TREE = {
  
  // ⚙️ START HERE - Which question should appear first?
  startNodeId: "q1",
  
  // 📝 ALL YOUR QUESTIONS AND ENDINGS GO HERE
  nodes: {
    
    // ──────────────────────────────────────────────────────────
    // Question 1: Do you trade?
    // ──────────────────────────────────────────────────────────
    q1: {
      id: "q1",
      title: "main message",
     videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/main+message+plus+harmful.MP4",
      
      prompt: "Kya aap RTO challan app kholengein?",
      yes: "q2",      // If YES → go to q3
      no: "q3",       // If NO → go to q2
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null   // Not an ending
    },
    
    // ──────────────────────────────────────────────────────────
    // Question 2: Ever lost money?
    // ──────────────────────────────────────────────────────────
    q2: {
      id: "q2",
      title: "install the apk",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Install+the+apk.MP4",
      prompt: "Kya aap ye app install karengein?",
      yes: "q4",      // If YES → go to q4
      no: "q3",       // If NO → go to q5
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    

    q3: {
      id: "q3",
      title: "call from police",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Call+from+police+.MP4",
      prompt: "Kya aap yeh call uthana chahengein?",
      yes: "q9",   // If YES → go to q8
      no: "q10",    // If NO → go to q9
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    q4: {
      id: "q4",
      title: "Open app plus first permission",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Open+plus+1st+permission.MP4",
      prompt: "Kya aap yeh permission dengein",
      yes: "q7",      // If YES → go to q8
      no: "q5",      // If NO → go to q14
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    
    q5: {
      id: "q5",
      title: "Second Permission",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Permission+2.MP4",
      prompt: "Kya aap yeh permission dengein",
      yes: "q7",   // If YES → go to q8
      no: "q6",    // If NO → go to q9
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    q6: {
      id: "q6",
      title: "Third Permission",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Permission+3.MP4",
      prompt: "Kya aap yeh permission dengein?",
      yes: "q7",   // If YES → go to q8
      no: "q8",    // If NO → go to q9
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    // ──────────────────────────────────────────────────────────
    // Question 7: Want help with losses?
    // ─────────────────────────────────────────────────────────

    q9: {
      id: "q9",
      title: "Police force to install",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Police+force+to+install.MP4",
      prompt: "Kya aap apna challan dekhana chahengein?",
      yes: "q11",     // If YES → go to q8
      no: "q10",     // If NO → go to q13
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    q10: {
      id: "q10",
      title: "Sms threat",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Sms+Threat.MP4",
      prompt: "Kya aap apna challan check karna chahengein?",
      yes: "q11",    // If YES → go to q12
      no: "q8",     // If NO → go to q13
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    q11: {
      id: "q11",
      title: "Check challan",
      videoUrl: "https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Check+Challan.MP4",
      prompt: "Kya aap ab install karengein?",
      yes: "q4",    // If YES → go to q10
      no: "q8",     // If NO → go to q13
      yesLabel: "Haan",  // Custom label for yes button (optional)
      noLabel: "Nahi",    // Custom label for no button (optional)
      outcome: null
    },
    // ──────────────────────────────────────────────────────────
    // 🚨 ENDING: Share Info (High Risk!)
    // ──────────────────────────────────────────────────────────
    q7: {
      id: "q7",
      title: "Scammed",
      videoUrl: "",
      imageUrl:"https://res.cloudinary.com/dndqxjnvx/image/upload/v1763713722/new_safe_card_rb5rju.jpg",
      prompt: "",
      yes: null,              // No next question
      no: null,               // No next question
      outcome: "Safe"    // This is an ending!
    },
    
    // ──────────────────────────────────────────────────────────
    // ✅ ENDING: Safe!
    // ──────────────────────────────────────────────────────────
    q8: {
      id: "q8",
      title: "Safe",
      videoUrl: "",
      imageUrl:"https://res.cloudinary.com/dndqxjnvx/image/upload/v1763713722/new_scam_card_k0safu.jpg",
      prompt: "",
      yes: null,
      no: null,
      outcome: "Scammed"         // This is an ending!
    }
    
    // ──────────────────────────────────────────────────────────
    // 💡 TO ADD A NEW QUESTION:
    // ──────────────────────────────────────────────────────────
    // 1. Copy any question block above
    // 2. Give it a new ID (like "q9")
    // 3. Change the title, videoUrl, and prompt
    // 4. Set where yes/no should go
    // 5. Link to it from another question's yes/no field
    // 
    // Example:
    // q9: {
    //   id: "q9",
    //   title: "New Question",
    //   videoUrl: "https://your-video.mp4",
    //   prompt: "Your question here?",
    //   yes: "q10",           // Where YES goes
    //   no: "ending_safe",    // Where NO goes
    //   yesLabel: "Agree",    // Custom label for yes button (optional, defaults to "Haan")
    //   noLabel: "Disagree",  // Custom label for no button (optional, defaults to "Nahi")
    //   outcome: null
    // }
    // 
    // ──────────────────────────────────────────────────────────
    // 💡 TO ADD A NUMBER INPUT NODE:
    // ──────────────────────────────────────────────────────────
    // Example:
    // numberInputNode: {
    //   id: "numberInputNode",
    //   type: "numberInput",  // Required: marks this as a number input node
    //   title: "Investment Amount",
    //   videoUrl: "https://your-video.mp4",  // Optional: video plays before input
    //   prompt: "How much do you want to invest?",
    //   placeholder: "Enter amount",  // Optional: placeholder text
    //   submitLabel: "Submit",  // Optional: submit button label
    //   min: 0,  // Optional: minimum value
    //   max: 1000000,  // Optional: maximum value
    //   constraints: [  // Array of conditions to determine next node
    //     { 
    //       condition: (val) => val > 10000,  // If amount > 10000
    //       nextNodeId: "q10"  // Go to q10
    //     },
    //     { 
    //       condition: (val) => val <= 10000,  // If amount <= 10000
    //       nextNodeId: "q11"  // Go to q11
    //     }
    //   ],
    //   nextNodeId: "q12",  // Optional: fallback if no constraint matches
    //   outcome: null
    // }
    // ──────────────────────────────────────────────────────────
  }
};

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🎨 CUSTOMIZE YOUR ENDING SCREENS HERE
 * ═══════════════════════════════════════════════════════════════════════
 */
const OUTCOME_MESSAGES = {
  Safe: {
    title: "🎉 You're Safe!",
    message: "Great job! You identified the red flags and avoided the scam.",
    color: "#10b981",
    bgColor: "#d1fae5"
  },
  Scammed: {
    title: "⚠️ You Got Scammed!",
    message: "Unfortunately, you fell for the scam. Review the red flags you missed.",
    color: "#ef4444",
    bgColor: "#fee2e2"
  },
  ShareInfo: {
    title: "⚠️ High Risk!",
    message: "Sharing personal information with unverified sources can lead to identity theft and financial loss.",
    color: "#f59e0b",
    bgColor: "#fef3c7"
  }
};

/**
 * ═══════════════════════════════════════════════════════════════════════
 * 🚀 MAIN APP CODE - You don't need to edit below this line!
 * ═══════════════════════════════════════════════════════════════════════
 */

function MockScamTrainer() {
  // State management
  const [started, setStarted] = useState(false);
  const [currentNodeId, setCurrentNodeId] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [path, setPath] = useState([]);
  const [outcome, setOutcome] = useState(null);
  const [numberInput, setNumberInput] = useState('');
  const [showNumberInput, setShowNumberInput] = useState(false);
  
  const videoRef = useRef(null);
  const hasUserGesture = useRef(false);

  // Get current node from flow
  const currentNode = currentNodeId ? SCENARIO_TREE.nodes[currentNodeId] : null;

  // Start the scenario
  const handleStart = () => {
    hasUserGesture.current = true;
    setStarted(true);
    setCurrentNodeId(SCENARIO_TREE.startNodeId);
    setPath([SCENARIO_TREE.startNodeId]);
    console.log('🎬 Scenario started:', SCENARIO_TREE.startNodeId);
  };

  // Download user path as JSON
  const downloadLog = useCallback(() => {
    const node = currentNodeId ? SCENARIO_TREE.nodes[currentNodeId] : null;
    const log = {
      timestamp: new Date().toISOString(),
      path: path,
      outcome: node?.outcome || 'Unknown',
      nodeDetails: path.map(nodeId => ({
        id: nodeId,
        title: SCENARIO_TREE.nodes[nodeId]?.title
      }))
    };
    
    console.log('📊 User Path Log:', log);
    
    // Create downloadable JSON
    const dataStr = JSON.stringify(log, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `scam-training-log-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }, [currentNodeId, path]);

  // Handle video end
  const handleVideoEnd = useCallback(() => {
    const node = currentNodeId ? SCENARIO_TREE.nodes[currentNodeId] : null;
    console.log('📹 Video ended for node:', node?.id);
    setIsVideoPlaying(false);
    
    // Check if this is a number input node
    if (node?.type === 'numberInput') {
      setShowNumberInput(true);
      return;
    }
    
    // Check if this is a terminal node (has outcome or both yes/no are null)
    if (node?.outcome || (node?.yes === null && node?.no === null)) {
      const finalOutcome = node?.outcome || 'Safe';
      setOutcome(finalOutcome);
      console.log('🏁 Reached outcome:', finalOutcome);
      downloadLog();
    } else {
      setShowChoices(true);
    }
  }, [currentNodeId, downloadLog]);

  // Handle number input video end
  const handleNumberInputVideoEnd = useCallback(() => {
    const node = currentNodeId ? SCENARIO_TREE.nodes[currentNodeId] : null;
    console.log('📹 Number input video ended for node:', node?.id);
    setIsVideoPlaying(false);
    setShowNumberInput(true);
  }, [currentNodeId]);

  // Handle video playback
  useEffect(() => {
    if (currentNode) {
      // Check if this is a number input node
      if (currentNode.type === 'numberInput') {
        setShowNumberInput(true);
        setShowChoices(false);
        setIsVideoPlaying(false);
        // If there's a video, play it first
        if (currentNode.videoUrl && videoRef.current && hasUserGesture.current) {
          setIsVideoPlaying(true);
          setShowNumberInput(false);
          videoRef.current.currentTime = 0;
          const playPromise = videoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error('Video playback failed:', error);
              handleNumberInputVideoEnd();
            });
          }
        }
      } else if (currentNode.videoUrl && videoRef.current && hasUserGesture.current) {
        setIsVideoPlaying(true);
        setShowChoices(false);
        setShowNumberInput(false);
        
        // Reset video to start
        videoRef.current.currentTime = 0;
        
        // Play video with error handling
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Video playback failed:', error);
            // If autoplay fails, show choices immediately
            handleVideoEnd();
          });
        }
      }
    }
  }, [currentNodeId, currentNode, handleVideoEnd, handleNumberInputVideoEnd]);

  // Handle number input submit
  const handleNumberSubmit = () => {
    const numValue = parseFloat(numberInput);
    
    if (isNaN(numValue)) {
      alert('Please enter a valid number');
      return;
    }

    if(currentNode.min && numValue < currentNode.min){
      alert('Please enter a number greater than or equal to ' + currentNode.min);
      return;
    }
    if(currentNode.max && numValue > currentNode.max){
      alert('Please enter a number less than or equal to ' + currentNode.max);
      return;
    }
    console.log(`🔢 User entered: ${numValue}`);

    // Find the matching constraint
    let nextNodeId = null;
    if (currentNode.constraints && Array.isArray(currentNode.constraints)) {
      for (const constraint of currentNode.constraints) {
        if (constraint.condition && constraint.condition(numValue)) {
          nextNodeId = constraint.nextNodeId;
          break;
        }
      }
    }

    // Fallback to default next node if no constraint matches
    if (!nextNodeId && currentNode.nextNodeId) {
      nextNodeId = currentNode.nextNodeId;
    }

    console.log(`➡️ Next node: ${nextNodeId || 'END'}`);

    if (nextNodeId) {
      setCurrentNodeId(nextNodeId);
      setPath(prev => [...prev, nextNodeId]);
      setShowNumberInput(false);
      setNumberInput('');
    } else {
      // No next node means we've reached an end
      const finalOutcome = currentNode.outcome || 'Safe';
      setOutcome(finalOutcome);
      downloadLog();
    }
  };

  // Handle user choice (Yes/No)
  const handleChoice = (choice) => {
    const nextNodeId = choice === 'yes' ? currentNode.yes : currentNode.no;
    
    console.log(`👆 User chose: ${choice.toUpperCase()} → ${nextNodeId || 'END'}`);
    
    if (nextNodeId) {
      setCurrentNodeId(nextNodeId);
      setPath(prev => [...prev, nextNodeId]);
      setShowChoices(false);
    } else {
      // No next node means we've reached an end
      const finalOutcome = currentNode.outcome || 'Safe';
      setOutcome(finalOutcome);
      downloadLog();
    }
  };


  // Reset to start
  const handleReset = () => {
    setStarted(false);
    setCurrentNodeId(null);
    setIsVideoPlaying(false);
    setShowChoices(false);
    setShowNumberInput(false);
    setNumberInput('');
    setPath([]);
    setOutcome(null);
    hasUserGesture.current = false;
    console.log('🔄 Scenario reset');
  };

  // Handle share functionality
  const handleShare = async () => {
    const shareData = {
      title: 'Investment Mock Scam - Siren',
      text: 'Check out this interactive scam training scenario!',
      url: window.location.href
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share(shareData);
        console.log('✅ Shared successfully');
      } else {
        // Fallback: Copy link to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      // User cancelled or error occurred
      if (error.name !== 'AbortError') {
        // Fallback: Copy link to clipboard
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        } catch (clipboardError) {
          console.error('Failed to copy link:', clipboardError);
          alert('Unable to share. Please copy the URL manually.');
        }
      }
    }
  };

  // Breadcrumb trail
  // const breadcrumbs = path.map(nodeId => "Testttt" || nodeId);

  return (
    <div style={styles.container}>
      <div style={styles.phoneFrame}>
        {/* Breadcrumb */}
        {started && !outcome && (
          <div style={styles.breadcrumb}>
            MOCK SCAM - RTO Challan APK
          </div>
        )}

        {/* Start Screen */}
        {!started && (
          <div style={styles.startScreen}>
            <img 
              src="https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Apk+RTO+scam/Gemini_Generated_Image_x4m7ucx4m7ucx4m7.png" 
              alt="Digital Arrest Mock Scam" 
              style={styles.startImage}
            />
            <h1 style={styles.startTitle}>RTO Fake APK Mock Scam</h1>
            <p style={styles.startSubtitle}>
              Created by <a href="https://joinsiren.com" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: '#64748b'}}>Siren</a>
            </p>
            <button 
              onClick={handleStart}
              style={styles.startButton}
              aria-label="Start mock scam scenario"
            >
              Start Mock
            </button>
          </div>
        )}

        {/* Video + Interaction Screen */}
        {started && !outcome && currentNode && (
          <div style={styles.contentScreen}>
            {/* Video Player */}
            <div style={styles.videoContainer}>
              {currentNode.videoUrl ? (
              <video
                ref={videoRef}
                src={currentNode.videoUrl}
                style={styles.video}
                playsInline
                onEnded={handleVideoEnd}
                onContextMenu={(e) => e.preventDefault()}
                controlsList="nodownload nofullscreen noremoteplayback"
              />
              ):(
                <div>
                  {true && (
                    <button 
                      onClick={handleReset} 
                      style={{
                        ...styles.choiceButton, 
                        ...styles.submitButton, 
                        position: 'absolute', 
                        top: "3%", 
                        left: "51%", 
                        transform: 'translateX(-50%)', 
                        zIndex: 1000, 
                        width: 'fit-content',
                        backgroundColor: currentNode.outcome === 'Scammed' ? 'rgb(41, 3, 5)' : currentNode.outcome === 'Safe' ? 'rgb(62, 152, 231)' : styles.submitButton.backgroundColor
                      }}
                    >
                      Restart
                    </button>
                  )}
                  <img src={currentNode.imageUrl} alt="Video" style={styles.video} />
                  {true &&
                  <div style={{position: 'absolute', bottom: "10%", left: "51%", transform: 'translateX(-50%)', zIndex: 1000, display: 'flex', gap: '10px', width: '100%', justifyContent: 'center'}}>
                  <button 
                    onClick={handleShare} 
                    style={{
                      ...styles.choiceButton, 
                      ...styles.submitButton, 
                      width: 'fit-content',
                      backgroundColor: currentNode.outcome === 'Scammed' ? 'rgb(87, 8, 17)' : currentNode.outcome === 'Safe' ? 'rgb(4, 60, 144)' : styles.submitButton.backgroundColor
                    }}
                  >
                    Share
                  </button>
                  <button 
                    onClick={() => window.open('https://joinsiren.com', '_blank')} 
                    style={{
                      ...styles.choiceButton, 
                      ...styles.submitButton,  
                      width: 'fit-content',
                      backgroundColor: currentNode.outcome === 'Scammed' ? 'rgb(87, 8, 17)' : currentNode.outcome === 'Safe' ? 'rgb(4, 60, 144)' : styles.submitButton.backgroundColor
                    }}
                  >
                    Get Early Access to Siren
                  </button>
                    <div>  
                  </div>
                  </div>
                  }</div>
              )}
              
              {/* Video overlay during playback */}
              {/* {isVideoPlaying && (
                <div style={styles.videoOverlay}>
                  <div styl={styles.playingIndicator}>▶ Playing...</div>
                </div>
              )} */}
            </div>

            {/* Number Input UI - Appears centered on top of video */}
            {showNumberInput && currentNode?.type === 'numberInput' && (
              <div style={styles.choiceContainer}>
                <h2 style={styles.prompt}>{currentNode.prompt}</h2>
                
                <div style={styles.inputGroup}>
                  <input
                    type="number"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleNumberSubmit();
                      }
                    }}
                    placeholder={currentNode.placeholder || "Enter a number"}
                    style={styles.numberInput}
                    min={currentNode.min !== undefined ? currentNode.min : undefined}
                    max={currentNode.max !== undefined ? currentNode.max : undefined}
                    autoFocus
                  />
                  <button
                    onClick={handleNumberSubmit}
                    style={{...styles.choiceButton, ...styles.submitButton}}
                    aria-label="Submit number"
                  >
                    {currentNode.submitLabel || 'Submit'}
                  </button>
                </div>
              </div>
            )}

            {/* Choice UI - Appears centered on top of video */}
            {showChoices && currentNode?.type !== 'numberInput' && (
              <div style={styles.choiceContainer}>
                <h2 style={styles.prompt}>{currentNode.prompt}</h2>
                
                <div style={styles.buttonGroup}>
                  <button
                    onClick={() => handleChoice('yes')}
                    style={{...styles.choiceButton, ...styles.yesButton}}
                    aria-label={`Choose ${currentNode.yesLabel || 'Yes'}`}
                  >
                    {currentNode.yesLabel || 'Yes'}
                  </button>
                  <button
                    onClick={() => handleChoice('no')}
                    style={{...styles.choiceButton, ...styles.noButton}}
                    aria-label={`Choose ${currentNode.noLabel || 'No'}`}
                  >
                    {currentNode.noLabel || 'No'}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Outcome Screen */}
        {outcome && (
          <div style={{
            ...styles.outcomeScreen,
            backgroundColor: OUTCOME_MESSAGES[outcome]?.bgColor || '#f3f4f6'
          }}>
            <div style={styles.outcomeCard}>
              <h1 style={{
                ...styles.outcomeTitle,
                color: OUTCOME_MESSAGES[outcome]?.color || '#374151'
              }}>
                {OUTCOME_MESSAGES[outcome]?.title || 'Scenario Complete'}
              </h1>
              <p style={styles.outcomeMessage}>
                {OUTCOME_MESSAGES[outcome]?.message || 'Thank you for participating.'}
              </p>
              
              <div style={styles.outcomeStats}>
                <p style={styles.statText}>
                  <strong>Nodes visited:</strong> {path.length}
                </p>
                {/* <p style={styles.statText}>
                  <strong>Path:</strong> {breadcrumbs.join(' → ')}
                </p> */}
              </div>

              <button
                onClick={handleReset}
                style={styles.resetButton}
                aria-label="Start over"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    padding: '0px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  phoneFrame: {
    width: '100vw',
    height: '100vh',
    //maxWidth: '390px',
    aspectRatio: '9/16',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  breadcrumb: {
    padding: '12px 16px',
    backgroundColor: '#f8fafc',
    fontSize: '11px',
    color: '#64748b',
    borderBottom: '1px solid #e2e8f0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  startScreen: {
    backgroundSize: 'cover',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    backgroundImage: 'url(https://s3.ap-south-1.amazonaws.com/cdn.joinsiren.com/mock-videos/Investment+Scam+Mock/BG+main+phone.png)'
  },
  startImage: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '24px',
    objectFit: 'contain'
  },
  startTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '16px'
  },
  startSubtitle: {
    fontSize: '16px',
    color: '#64748b',
    marginBottom: '40px',
    lineHeight: '1.6'
  },
  startButton: {
    padding: '16px 48px',
    fontSize: '18px',
    fontWeight: '600',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
  },
  contentScreen: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  videoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  videoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: '20px',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.3))'
  },
  playingIndicator: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
  },
  choiceContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    maxWidth: '340px',
    padding: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: '16px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
    zIndex: 10
  },
  prompt: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: '20px',
    textAlign: 'center'
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '16px'
  },
  numberInput: {
    width: '100%',
    padding: '16px',
    fontSize: '16px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box'
  },
  choiceButton: {
    flex: 1,
    padding: '16px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    color: 'white'
  },
  submitButton: {
    backgroundColor: '#3b82f6',
    width: '100%'
  },
  yesButton: {
    backgroundColor: '#10b981'
  },
  noButton: {
    backgroundColor: '#ef4444'
  },
  replayButton: {
    width: '100%',
    padding: '12px',
    fontSize: '14px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  outcomeScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px'
  },
  outcomeCard: {
    textAlign: 'center'
  },
  outcomeTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px'
  },
  outcomeMessage: {
    fontSize: '16px',
    color: '#475569',
    marginBottom: '24px',
    lineHeight: '1.6'
  },
  outcomeStats: {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '12px',
    marginBottom: '24px',
    textAlign: 'left'
  },
  statText: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '8px'
  },
  resetButton: {
    padding: '14px 40px',
    fontSize: '16px',
    fontWeight: '600',
    backgroundColor: '#0f172a',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
};

// Development helper - simulate a path through the flow
window.simulatePath = (pathArray) => {
  console.log('🧪 Simulating path:', pathArray);
  pathArray.forEach((nodeId, index) => {
    const node = SCENARIO_TREE.nodes[nodeId];
    console.log(`Step ${index + 1}: ${nodeId} - ${node?.title || 'Unknown'}`);
  });
};

export default MockScamTrainer;
