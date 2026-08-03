// React import not needed with JSX transform
import { Bot } from 'lucide-react';

export default function AIConsole({ signal }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Bot className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold text-slate-900">AI Insight Console</h2>
      </div>
      
      <div className="flex-1 bg-slate-50 rounded-lg p-4 border border-slate-300 overflow-y-auto">
        {!signal ? (
          <div className="text-slate-500 h-full flex items-center justify-center italic text-center">
            Waiting for signal trigger to generate risk assessment...
          </div>
        ) : (
          <div className="text-slate-700 leading-relaxed font-mono text-sm">
            {signal.insight === "Waiting..." ? (
              <span className="animate-pulse text-blue-600">Analyzing market context with DeepSeek...</span>
            ) : (
              <div>
                <div className="text-blue-600 mb-2 font-bold">DeepSeek Assessment ({new Date(signal.timestamp).toLocaleTimeString()}):</div>
                {signal.insight}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
