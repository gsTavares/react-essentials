import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton onSelect={() => handleClick("components")} isSelected={selectedTopic === 'components'}>Components</TabButton>
                <TabButton onSelect={() => handleClick("jsx")} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                <TabButton onSelect={() => handleClick("props")} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onSelect={() => handleClick("state")} isSelected={selectedTopic === 'state'}>State</TabButton>
            </menu>
            {!selectedTopic && <p>Please selected a topic.</p>}
            {selectedTopic &&
                (
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                )
            }
        </section>
    )
}