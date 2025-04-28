'use client';

import {
  Background,
  BackgroundVariant,
  Handle,
  Position,
  ReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { EditorHeader } from './editor-header';
import { Button } from './ui/button';
import { Bot, ClipboardX, Pencil, Plus, Save, Settings } from 'lucide-react';

const initialNodes = [
  { id: '1', type: 'agent', position: { x: 100, y: 50 }, data: { label: '1' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const AgentNode = () => {
  return (
    <>
      <Button
        variant="outline"
        className="p-0 h-auto whitespace-normal text-left overflow-hidden shadow-md hover:bg-zinc-900"
      >
        <div className="w-72">
          <div className="px-4 py-2 border-b border-input flex gap-4 text-left bg-zinc-800">
            <div className="flex-1 border-r border-border truncate">
              Basic Agent
            </div>

            <Bot />
          </div>
          <div>
            <div className="px-4 py-2">
              You are a helpful assistant. You can answer questions...
            </div>
            <div className="rounded-tr-md border-t border-r border-input p-2 inline-flex mt-2">
              <div className="px-2">Tools</div>
              <div className="bg-border py-[1px] px-1 rounded-sm text-xs">
                20
              </div>
            </div>
          </div>
        </div>
      </Button>
    </>
  );
};

const nodeTypes = {
  agent: AgentNode,
};

export const Editor = () => {
  return (
    <div className="min-w-0 h-dvh bg-background flex">
      <div className="flex flex-col h-full flex-1">
        <EditorHeader />

        <div className="flex-1">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            nodeTypes={nodeTypes}
          >
            <Background color="#27272a" variant={BackgroundVariant.Cross} />
          </ReactFlow>
        </div>
      </div>

      <div className="py-1.5 px-2">
        <div className="rounded-md border h-full w-96 border-input flex flex-col">
          <div className="p-2 border-b border-border flex gap-2 items-center">
            <div className="p-1.5 bg-input rounded-md">
              <Pencil size={10} />
            </div>
            Basic Agent
          </div>

          <div className="p-2.5 flex flex-col gap-2 flex-1 bg-border/20">
            <div className="border border-input rounded-md">
              <div className="text-sm font-semibold p-2.5">Tools</div>

              <div className="p-4 border-y border-dashed border-input text-center text-muted-foreground">
                No tools added yet.
              </div>

              <div className="p-2 flex gap-2">
                <Button variant="ghost" className="h-7 p-1">
                  <Settings />
                </Button>
                <Button variant="outline" className="w-full h-7" size="sm">
                  <Plus />
                </Button>
              </div>
            </div>
            <div className="border border-input rounded-md">
              <div className="text-sm font-semibold p-2.5">System Prompts</div>

              <div className="p-4 border-y border-dashed border-input text-center text-muted-foreground">
                No prompts added yet.
              </div>

              <div className="p-2">
                <Button variant="outline" className="w-full h-7" size="sm">
                  <Plus />
                </Button>
              </div>
            </div>
          </div>

          <div className="p-2 border-t border-border flex gap-2 items-center">
            <Button className="flex-1">
              <Save />
              Save
            </Button>
            <Button className="flex-1" variant="destructive">
              <ClipboardX />
              Discard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
