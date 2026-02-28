'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Download,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  FileText,
  Loader2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ResumeViewer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const totalPages = 2;

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abhinandan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoom = (factor: number) => {
    setScale(prevScale => {
      const newScale = prevScale + factor;
      return Math.min(Math.max(newScale, 0.5), 2); // Limit zoom between 50% and 200%
    });
  };

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
    setIsLoading(true);
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            My Resume
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            View or download my detailed professional experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Controls */}
          <Card className="mb-6 p-4 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleZoom(-0.1)}
                        disabled={scale <= 0.5}
                      >
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Zoom Out</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleZoom(0.1)}
                        disabled={scale >= 2}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Zoom In</TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Math.round(scale * 100)}%
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Previous Page</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <span className="text-sm">
                    Page {currentPage} of {totalPages}
                  </span>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Next Page</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="default"
                        onClick={handleDownload}
                        className="bg-primary hover:bg-primary/90"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Download Resume</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Card>

          {/* PDF Viewer */}
          <Card className="overflow-hidden shadow-xl bg-white dark:bg-gray-800">
            <div className="relative min-h-[842px]">
              {' '}
              {/* A4 height ratio */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              )}
              <iframe
                src={`/resume.pdf#page=${currentPage}`}
                className="w-full h-full min-h-[842px] border-0"
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </Card>

          {/* Mobile download prompt */}
          <div className="mt-6 text-center md:hidden">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <FileText className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For better viewing on mobile, consider downloading the PDF
              </p>
              <Button
                variant="default"
                onClick={handleDownload}
                className="mt-3 bg-primary hover:bg-primary/90"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
